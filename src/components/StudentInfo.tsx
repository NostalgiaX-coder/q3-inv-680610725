import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";

export function StudentInfo() {
  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger render={<Button variant="outline" />}>
        Settawut Samaket
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>ข้อมูลนักศึกษา</DrawerTitle>
          <DrawerDescription>
            Student information
          </DrawerDescription>
        </DrawerHeader>

        <div className="flex-1 overflow-y-auto p-4">
          <Card className="gap-0 overflow-hidden py-0">
            <img
              src="/student.jpg"
              alt="Pic"
              className="aspect-square w-full object-cover"
            />

            <CardContent className="space-y-5 p-4">
              <div>
                <h2 className="font-semibold">
                  เศรษฐวุฒิ สมาเกตุ
                </h2>

                <p className="mt-1 text-sm text-muted-foreground">
                  นักศึกษาชั้นปีที่ 2 สาขาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่
                </p>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <Badge className="shrink-0">
                    Hobbies
                  </Badge>
                  <span>เตะฟุตบอล เล่นเกม ขายของ</span>
                </div>

                <div className="flex items-start gap-2">
                  <Badge className="shrink-0">
                    Email
                  </Badge>
                  <span className="min-w-0 break-all">
                    settawut_sa@cmu.ac.th
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <Badge className="shrink-0">
                    Social
                  </Badge>
                  <span className="min-w-0 break-all">
                    htttps://instagram.com/amelyyz_
                  </span>
                </div>
              </div>
            </CardContent>

            <CardFooter className="border-t bg-muted/30 p-4">
              <p className="text-sm">
                รหัสนักศึกษา: 680610725
              </p>
            </CardFooter>
          </Card>
        </div>

        <DrawerFooter>
          <DrawerClose render={<Button className="w-full" />}>
            Close
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}