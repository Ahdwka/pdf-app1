import { useParams } from "next/navigation";

export default function CategoryPage() {
  const { id } = useParams();
  return <div>CategoryPage {id}</div>;
}
