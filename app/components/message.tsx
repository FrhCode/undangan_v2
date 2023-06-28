"use client";
import { useRouter, usePathname } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { Message } from "@prisma/client";
import clsx from "clsx";

type FormData = {
  name: string;
  content: string;
};

type Props = {
  messages: Message[];
};

export default function Message({ messages }: Props) {
  const router = useRouter();
  const path = usePathname();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const res = await fetch("/api/messages", {
      body: JSON.stringify(data),
      method: "POST",
    }).then((res) => res.json());

    router.refresh();
    reset();
  };

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
      <form className="w-full space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="h-10">
          <input
            type="text"
            placeholder="Masukan nama anda"
            className={clsx(
              `h-full w-full border-b-2 bg-transparent px-2 text-teal-900 focus:outline-none`,
              {
                "border-teal-700": errors.name === undefined,
                "border-red-700": errors.name,
              }
            )}
            {...register("name", { required: "Kolom wajib diisi" })}
          />
        </div>

        <div className="">
          <textarea
            id=""
            rows={3}
            className={clsx(
              `w-full border-2 bg-transparent px-2 leading-10 text-teal-900 focus:outline-none`,
              {
                "border-teal-700": errors.content === undefined,
                "border-red-700": errors.content,
              }
            )}
            placeholder="Masukan pesan anda"
            {...register("content", { required: "Kolom wajib diisi" })}
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
