import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { motion } from "framer-motion";
import { orbitron } from "@/fonts/fonts";
import { FAQRelatedQuestions as FAQData } from "@/data/faq";

const FAQ = () => {
  const [fnqData, setFnqData] = useState(FAQData);
  const handleToggle = (id:any) => {
    setFnqData((prev) => {
      return prev.map((val) =>
        val.id === id
          ? { ...val, isOpen: !val.isOpen }
          : { ...val, isOpen: false }
      );
    });
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="flex  flex-col   flex-wrap mt-[32px] px-3 sm:px-6 "
    >
     
      <div className="mt-[24px] w-full  ">
      <h3 className={`${orbitron.className} text-primary mb-4 text-2xl`}>
            FAQ
          </h3>
        {fnqData.length > 0 &&
          fnqData.map(({ question, answer, id, isOpen }) => (
            <motion.div
              whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
              transition={{ duration: 0.5 }}
              key={id}
              className="mt-9"
            >
                
              <div
                onClick={() => handleToggle(id)}
                className=" w-full  cursor-pointer  flex justify-between items-center"
              >
                <p className="text-white">{question}</p>
                {isOpen ? (
                  <BsChevronUp className="text-white" />
                ) : (
                  <BsChevronDown className="text-white" />
                )}
              </div>
              {isOpen && (
                <motion.div
                  onClick={() => handleToggle(id)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className=""
                >
                  <p className="text-white  ">{answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
      </div>
    </motion.div>
  );
};

export default FAQ;
