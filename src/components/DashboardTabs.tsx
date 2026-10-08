import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { ListTree, LayoutGrid } from "lucide-react";
import { OverviewCards } from "@/components/OverviewCards";
import { CategoryCards } from "@/components/CategoryCards";

export function DashboardTabs() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList>
        <TabsTrigger value="overview">
          <ListTree className="h-4 w-4" />
          Overview
        </TabsTrigger>

        <TabsTrigger value="category">
          <LayoutGrid className="h-4 w-4" />
          By Category
        </TabsTrigger>
      </TabsList>

      <TabsContent value="overview">
        <OverviewCards />
      </TabsContent>

      <TabsContent value="category">
        <CategoryCards />
      </TabsContent>
    </Tabs>
  );
}
