import AddPage from "@/components/template/AddPage";
import getSession from "@/utils/getSession";
import { redirect } from "next/navigation";

const Add = async () => {
  const session = await getSession();
  if (!session || !session?.user) {
    redirect("/");
  }
  return <AddPage />;
};

export default Add;
