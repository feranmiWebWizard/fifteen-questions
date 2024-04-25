import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);

  return (
    <nav className="bg-amber-950 sticky top-0 inset-x-0 z-[10] p-4">
      <div className=" flex justify-end relative lg:hidden px-4 py-2 z-10">
        <motion.button
          animate={mobileNav ? "open" : "closed"}
          onClick={() => {
            toggleMobileNav();
          }}
          className="space-y-1 "
        >
          <motion.span
            variants={{
              open: { rotate: 45, y: 7 },
              closed: { rotate: 0, y: 0 },
            }}
            className="bg-white block w-5 h-[0.2rem]"
          ></motion.span>
          <motion.span
            variants={{
              open: { opacity: 0 },
              closed: { opacity: 1 },
            }}
            className="bg-white block w-5 h-[0.2rem]"
          ></motion.span>
          <motion.span
            variants={{
              open: { rotate: -45, y: -8 },
              closed: { rotate: 0, y: 0 },
            }}
            className="bg-white block w-5 h-[0.2rem]"
          ></motion.span>
        </motion.button>
      </div>

      {/* logic to handle opening of dropdown menu */}
      <AnimatePresence>
        {mobileNav && (
          <MotionConfig transition={{ type: "spring", bounce: 0.099 }}>
            <motion.div
              variants={{
                open: {
                  y: "0%",
                  transition: {
                    when: "beforeChildren",
                    type: "spring",
                    bounce: 0.099,
                  },
                },
                closed: {
                  y: "-100%",
                  transition: {
                    when: "afterChildren",
                    type: "spring",
                    bounce: 0.099,
                  },
                },
              }}
              initial="closed"
              animate="open"
              exit="closed"
              className="bg-amber-950 text-white flex flex-col justify-center fixed inset-0 lg:hidden"
            >
              <motion.div
                variants={{
                  open: { opacity: 1, x: "0%" },
                  closed: { opacity: 0, x: "25%" },
                }}
              >
                <ul className=" text-2xl font-semibold space-y-10 p-10 inset-0">
                  <motion.li
                    variants={{
                      tapped: { scale: 1.2 },
                      untouched: { scale: 1 },
                    }}
                    whileTap="tapped"
                    initial="untouched"
                    className=""
                  >
                    <p>Popular Tests</p>
                  </motion.li>
                  <motion.li
                    variants={{
                      tapped: { scale: 1.2 },
                      untouched: { scale: 1 },
                    }}
                    whileTap="tapped"
                    initial="untouched"
                    className=""
                  >
                    <p>Create Test</p>
                  </motion.li>
                  <motion.li
                    variants={{
                      tapped: { scale: 1.2 },
                      untouched: { scale: 1 },
                    }}
                    whileTap="tapped"
                    initial="untouched"
                    className=""
                  >
                    <p>Languages</p>
                  </motion.li>
                </ul>
              </motion.div>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>

      <div className="text-white text-xl hidden lg:flex justify-around">
        <h2>Fifteen Questions</h2>
        <ul className="text-2xl flex items-center space-x-10">
          <motion.li whileHover={{ y: -5 }} className="">
            <p>Popular Tests</p>
          </motion.li>
          <motion.li whileHover={{ y: -5 }} className="">
            <p>Create Test</p>
          </motion.li>
          <motion.li whileHover={{ y: -5 }} className="">
            <p>Languages</p>
          </motion.li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
