"use client";

import React, { useEffect, useRef, useState } from "react";
import RevealOpacity from "./reveal-opacity";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { useForm, UseFormRegister, Path, SubmitHandler } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import clsx from "clsx";

interface IFormValues {
  name: string;
  total: number;
  status: string;
}

export default function Reservation() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: { status: "Iya saya bisa datang" },
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    let text: string;
    if (data.status == "Iya saya bisa datang") {
      text = `Assalamualaikum Rizki. 
	
			Insyaallah aku (${data.name}) akan datang ke acara pernikahan, bersama keluarga berjumlah ${data.total}`;
    } else if (data.status == "Saya Masih Ragu") {
      text = `Assalamualaikum Rizki. 
	
			aku (${data.name}) masih ragu apakah akan bisa datang atau tidak`;
    } else {
      text = `Assalamualaikum Rizki. 

			maaf aku (${data.name}) tidak bisa datang`;
    }

    let url = `https://api.whatsapp.com/send?phone=6281383178213&text=${encodeURI(
      text.replace(/\t/g, "")
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="flex flex-col items-center justify-center space-y-4 bg-teal-50 p-8">
      <div className="flex flex-col items-center justify-center space-y-2">
        <RevealOpacity>
          <p className="font-dancing font-dancing-script text-3xl font-semibold text-teal-900">
            Konfirmasi Kehadiran
          </p>
        </RevealOpacity>
        <div className=" h-0 w-36 border-t-2 border-solid border-teal-900"></div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* <DevTool control={control} /> */}
        <div className="flex h-10 justify-between">
          <input
            type="text"
            placeholder="Masukan nama anda"
            className={clsx(
              `h-full w-[74%] border-b-2 bg-transparent px-2 text-teal-900 focus:outline-none`,
              {
                "border-teal-700": errors.name === undefined,
                "border-red-700": errors.name,
              }
            )}
            {...register("name", { required: "Kolom nama wajib diisi" })}
          />
          <input
            type="number"
            placeholder="Jumlah"
            className={clsx(
              "h-full w-[25%] border-b-2 bg-transparent px-2 text-teal-900 focus:outline-none",
              {
                "border-teal-700": errors.total === undefined,
                "border-red-700": errors.total,
              }
            )}
            {...register("total", { required: "Kolom jumlah wajib diisi" })}
          />
        </div>

        <div className="space-y-2">
          <CheckMark
            name="status"
            options={[
              "Iya saya bisa datang",
              "Saya Masih Ragu",
              "Maaf, Saya Tidak Bisa Datang",
            ]}
            register={register}
            value={watch("status")}
          />
        </div>
        <motion.button
          // href="Halo%20Rizki%2C%20ini%20Farhan.%0A%0AInsyaallah%20Saya%20bisa%20datang%2C%20dengan%20keluarga%20saya%20yang%20berjumlah%205%20orang%0A"
          className="inline-block rounded-sm bg-teal-700 p-2 text-sm text-white"
          whileTap={{ scale: 0.95 }}
        >
          Reservasi Melalui Whatsapp
        </motion.button>
      </form>
    </section>
  );
}

type CheckMarkPorps = {
  options: string[];
  name: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  value: string;
};
function CheckMark({ name, options, register, value }: CheckMarkPorps) {
  const active = value;

  return (
    <>
      {options.map((option) => (
        <CheckMarkItem
          value={option}
          key={option}
          active={active}
          register={register}
          name={name}
        />
      ))}
    </>
  );
}

type CheckMarkItemProps = {
  name: Path<IFormValues>;
  value: string;
  active: string;
  register: UseFormRegister<IFormValues>;
};

function CheckMarkItem({ name, value, active, register }: CheckMarkItemProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const isChecked = value === active;

  return (
    <motion.label
      className="flex cursor-pointer select-none items-center justify-between rounded border border-teal-700 px-3 py-2"
      htmlFor={value}
      whileTap={{ scale: 0.98 }}
    >
      <input
        type="radio"
        id={value}
        value={value}
        hidden
        // onChange={(e) => setActive(e.target.value)}
        {...register(name)}
      />
      <p>{value}</p>
      {isChecked && (
        <motion.div layoutId={`check-${name}`}>
          <AiOutlineCheckCircle size={20} className="text-teal-700" />
        </motion.div>
      )}
    </motion.label>
  );
}
