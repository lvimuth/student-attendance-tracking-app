"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import GlobalApi from "@/app/_services/GlobalApi";
import { toast } from "sonner";

function AddNewStudent() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    GetAllGradeList();
  }, []);

  const GetAllGradeList = () => {
    GlobalApi.GetAllGrades().then((resp) => {
      setGrades(resp.data);
    });
  };
  const [grades, setGrades] = useState();
  const onSubmit = (data) => {
    console.log(data);
    GlobalApi.CreateNewStudent(data).then((resp) => {
      console.log(resp);
      if (resp.data) {
        setOpen(false);
        toast("New Student Created!");
      }
    });
  };

  return (
    <div>
      <Button onClick={() => setOpen(true)}>+ Add New Student</Button>
      <Dialog open={open}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Student</DialogTitle>
            <DialogDescription>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="py-2">
                  <label htmlFor="">Full Name</label>
                  <Input
                    placeholder="Ex. John carry"
                    {...register("name", { required: true })}
                  />
                </div>
                <div className="py-2 flex flex-col">
                  <label htmlFor="">Select Grade</label>
                  <select
                    className="p-3 border rounded-lg py-2"
                    {...register("grade", { required: true })}
                  >
                    {grades?.map((grade, index) => (
                      <option key={index} value={grade.grade}>
                        {grade.grade}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="py-2">
                  <label htmlFor="">Contact Number</label>
                  <Input
                    type="number"
                    placeholder="Ex. +971501234567"
                    {...register("contact")}
                  />
                </div>
                <div className="py-2">
                  <label htmlFor="">Address</label>
                  <Input
                    className=""
                    placeholder="Ex. 212, North Street, NY, United States"
                    {...register("address")}
                  />
                </div>
                <div className="flex gap-2 items-center justify-end mt-5">
                  <Button onClick={() => setOpen(false)} variant="ghost">
                    Cancel
                  </Button>
                  <Button type="submit">Save</Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewStudent;
