import { FolderSearch2 } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface SearchProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

export default function Search({ searchTerm, setSearchTerm }: SearchProps) {
  return (
    <div className="animate-fade-down animate-delay-1000 animate-once animate-ease-out  my-10 relative  mx-auto sm:w-96 w-72">
      <div className=" flex items-center justify-center">
        <FolderSearch2 size={20} className="absolute left-4 text-primary/50" />
        <input
          type="text"
          placeholder="إبحث في الملفات..."
          className="alexandria px-4 py-2 rounded-4xl w-96 border-[1px] border-primary bg-secondary/20"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}
