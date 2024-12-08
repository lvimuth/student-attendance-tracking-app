"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

function AddNewStudent() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>+ Add New Student</Button>
      <Dialog open={open}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Student</DialogTitle>
            <DialogDescription>
              <div className="py-2">
                <label htmlFor="">Full Name</label>
                <Input placeholder="Ex. John carry" />
              </div>
              <div className="py-2 flex flex-col">
                <label htmlFor="">Select Grade</label>
                <select className="p-3 border rounded-lg py-2">
                  <option value={"1 st"}>1 st</option>
                  <option value={"2 nd"}>2 nd</option>
                  <option value={"3 rd"}>3 rd</option>
                  <option value={"4 th"}>4 th</option>
                  <option value={"5 th"}>5 th</option>
                  <option value={"6 th"}>6 th</option>
                  <option value={"7 th"}>7 th</option>
                  <option value={"8 th"}>8 th</option>
                  <option value={"9 th"}>9th</option>
                </select>
              </div>
              <div className="py-2">
                <label htmlFor="">Contact Number</label>
                <Input placeholder="Ex. +971501234567" />
              </div>
              <div className="py-2">
                <label htmlFor="">Address</label>
                <Input
                  className=""
                  placeholder="Ex. 212, North Street, NY, United States"
                />
              </div>
              <div className="flex gap-2 items-center justify-end mt-5">
                <Button onClick={() => setOpen(false)} variant="ghost">
                  Cancel
                </Button>
                <Button onClick={() => console.log("save")}>Save</Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewStudent;
