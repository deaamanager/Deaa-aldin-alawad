import { motion } from "framer-motion";


const Nackdrop = ({ children, onClick }) => {


    return (
    <motion.div
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}
     className=" absolute top-0 backdrop-brightness-50  flex flex-col items-center rounded-xl  w-full h-full bg-black space-y-5 z-20"
     onClick={onClick}
    >
       {children}

    </motion.div>
    );
};




const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

const DropContact  = ({ handelClose }) => {

    
    return (
      <Nackdrop onClick={handelClose}>
        <motion.div
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          ocClick={(e) => e.stopPropagation()}
          className=" absolute top-0  bg-red-400 rounded-xl flex flex-col items-center w-full h-full ] "
        >
          <div className="flex flex-row justify-evenly items-center ">
            <motion.img
              initial={{
                x: -500,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1.5,
              }}
              src="emailsending.ico"
              alt="email sending"
              className="h-14 w-14"
            />
            <motion.h1
              initial={{
                x: 500,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1.5,
              }}
              className="text-lg flex flex-row text-[#f7ab0a] "
            >
              I getted your Email
            </motion.h1>
          </div>
          <div className="h-28 w-28 flex flex-row justify-evenly items-center ">
            <p className="text-left  ml-[-123px] flex mt-[15px]">
            Thanks you for conact me, I will send you Email Back,
            </p>
            <p className="text-left  ml-[-123px] flex mt-[15px]">
            Hope nice day 🥳
            </p>
            <motion.img
              initial={{
                x: 500,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1.5,
              }}
              src="botavatar.png"
              alt="my bot"
              className="mt-auto flex h-[185px] mr-[-105px] animate-bounce "
            />
          </div>
  
          <motion.h1
            initial="hidden"
            animate="visible"
            className="relative bottom-[-75px] text-[#f7ab0a] "
          >
            Click anywhere to Close
          </motion.h1>
        </motion.div>
      </Nackdrop>
    );
  };

  export default DropContact;