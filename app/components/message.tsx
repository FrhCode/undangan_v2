"use client";
import {} from "next/navigation";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";

import Message from "@/type/messages";

type FormData = {
  name: string;
  message: string;
};

type Props = {
  messages: Message[];
};

export default function Message({ messages }: Props) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(async (data) => {
    console.log("Root Path:");
  });

  return (
    <section
      id="wishes"
      className="mb-20 flex flex-col items-center justify-center space-y-4 bg-teal-50 p-8"
    >
      <div className="flex flex-col items-center justify-center space-y-2">
        <p className="font-dancing-script text-3xl font-semibold text-teal-900">
          Kirimkan Pesan
        </p>
        <div className=" h-0 w-36 border-t-2 border-solid border-teal-900"></div>
      </div>
      <form className="w-full space-y-2" onSubmit={onSubmit}>
        <div className="h-10">
          <input
            type="text"
            placeholder="Masukan nama anda"
            className="h-full w-full border-b-2 border-teal-700 bg-transparent px-2 text-teal-900 focus:outline-none"
            {...register("name")}
          />
        </div>

        <div className="">
          <textarea
            id=""
            rows={3}
            className="w-full border-2 border-teal-700  bg-transparent px-2 leading-10 text-teal-900 focus:outline-none"
            placeholder="Masukan pesan anda"
            {...register("message")}
          ></textarea>
        </div>
        <motion.button
          className="rounded-sm bg-teal-700 p-2 text-white disabled:opacity-60"
          type="submit"
          whileTap={!isSubmitting ? { scale: 0.8 } : undefined}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Mengirim Pesan..." : "Kirimkan pesan"}
        </motion.button>
      </form>
      <div className="w-full space-y-2">
        <AnimatePresence initial={false}>
          {messages.map(({ name, content, id }) => {
            return (
              <motion.div
                className="rounded-md bg-teal-700"
                key={id}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
              >
                <div className="space-y-2 p-3">
                  <p className="font-semibold text-white">{name}</p>
                  <p className="text-sm text-white">{content}</p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
