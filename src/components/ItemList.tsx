import { useItemStore } from "@/store/dataStore";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash } from "lucide-react";

export function ItemList() {
  const inventory = useItemStore((state) => state.inventory);
  const deleteInventoryItem = useItemStore(
    (state) => state.deleteInventoryItem,
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Product List</CardTitle>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Category</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead className="text-right">Qty</TableHead>
              <TableHead className="text-right">Unit Price</TableHead>
              <TableHead className="text-right">Total Value</TableHead>
              <TableHead>Date Added</TableHead>
              <TableHead className="text-right">
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {inventory.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="py-6 text-center text-muted-foreground"
                >
                  No products in stock yet.
                </TableCell>
              </TableRow>
            ) : (
              inventory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Badge variant="outline">
                      {item.category}
                    </Badge>
                  </TableCell>

                  <TableCell className="font-medium">
                    {item.name}
                  </TableCell>

                  <TableCell className="text-right">
                    {item.quantity}
                  </TableCell>

                  <TableCell className="text-right">
                    ฿{item.price.toFixed(2)}
                  </TableCell>

                  <TableCell className="text-right font-semibold">
                    ฿{(item.quantity * item.price).toFixed(2)}
                  </TableCell>

                  <TableCell className="text-muted-foreground">
                    {item.date}
                  </TableCell>

                  <TableCell className="text-right">
                    <Button
                      className="bg-red-500 text-white hover:bg-red-600"
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteInventoryItem(item.id)}
                      aria-label={`Delete ${item.name}`}
                    >
                      <Trash className="h-4 w-4" />
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}