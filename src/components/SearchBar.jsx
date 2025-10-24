import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

const SearchBar = ({ value, onChange }) => {
  return (
<>
<div className="flex items-center">
     <Input
      placeholder="Search by name or email..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mb-4 w-[60%] "
    />
    </div>
   
   </>
  );
};

export default SearchBar;
