import AddPage from "@/components/template/AddPage";
import getSession from "@/utils/getSession";
import { redirect } from "next/navigation";

export const maxDuration = 30;
const Add = async () => {
  const session = await getSession();
  if (!session || !session?.user) {
    redirect("/signin");
  }
  return <AddPage />;
};

export default Add;
