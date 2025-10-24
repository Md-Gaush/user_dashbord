import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const UserForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.company) {
      toast.error("Please fill all fields");
      return;
    }

    onSubmit(form);
    toast.success("User added successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto">
           <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      
     
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter name"
        />
      </div>

     
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
      </div>

      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
        />
      </div>

    
      <div>
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Enter company"
        />
      </div>

      <Button type="submit" className="w-full">Add User</Button>
    </form>
    </div>
  
  );
};

export default UserForm;
