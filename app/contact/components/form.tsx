import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

type CheckboxesType = Array<{ label: string; value: string }>;

function ContactForm({ checkboxes }: { checkboxes: CheckboxesType }) {
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-2 gap-3 pt-4">
        <div>
          <Label>First Name *</Label>
          <Input placeholder="John" type="text" name="firstname" />
        </div>
        <div>
          <Label>Last Name</Label>
          <Input placeholder="Doe" type="text" name="firstname" />
        </div>
      </div>
      <div>
        <Label>Email Address *</Label>
        <Input placeholder="johndoe@gmail.com" type="email" name="email" />
      </div>
      <div>
        <Label>Phone *</Label>
        <Input placeholder="+91 9876543219" type="phone" name="phone" />
      </div>
      <div>
        <Label>Team Size</Label>
        <Input placeholder="10-50" name="size" />
      </div>
      <div>
        <Label>Location</Label>
        <Input placeholder="India" name="location" />
      </div>
      <div>
        <Label>Message *</Label>
        <Textarea
          placeholder="Submit your reviews here..."
          name="message"
          className="bg-white"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 px-6 py-3">
        <Label className="col-span-2">
          Which Product Are You Intrested in?
        </Label>
        {checkboxes.map((box) => (
          <div key={box.label} className="space-x-3 flex items-center">
            <Checkbox id={box.value} className="bg-white size-5 peer" />
            <label
              htmlFor={box.value}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize"
            >
              {box.value}
            </label>
          </div>
        ))}
      </div>
      <button className="bg-primary w-full px-3 rounded-full py-3  hover:bg-primary/90 shadow-md transition-colors duration-200 cursor-pointer text-black">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
