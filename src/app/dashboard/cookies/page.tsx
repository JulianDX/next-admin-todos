import { TabBar } from "@/app/components/TabBar";
import { cookies } from "next/headers";

export default function NamePage() {
  const cookieStore = cookies();
  const cookieTab = cookieStore.get("selectedTab")?.value ?? "1";

  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        <div className="flex flex-col">
          <span className="text-3xl">Tabs</span>
          <TabBar currentTab={+cookieTab} />
        </div>
      </div>
    </div>
  );
}
