import { useItemStore } from "@/store/dataStore";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function OverviewCards() {
  const inventory = useItemStore((state) => state.inventory);

  const totalProducts = inventory.length;

  const totalStockValue = inventory.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0,
  );

  const totalUnits = inventory.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">
            Total Stock Value
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl text-red-500 font-bold">
            ฿{totalStockValue.toFixed(2)}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">
            Total Products
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl text-blue-500 font-bold">
            {totalProducts}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">
            Total Units in Stock
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl text-green-700 font-bold">
            {totalUnits}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}