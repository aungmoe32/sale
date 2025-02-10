import * as React from "react";
import { Bell, Package, Tag, CreditCard, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface Notification {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  type: "order" | "promotion" | "payment" | "delivery" | "cart";
  read: boolean;
}

export default function NotificationModal() {
  const [notifications, setNotifications] = React.useState<Notification[]>([
    {
      id: "1",
      title: "Order Confirmed",
      description:
        "Your order #12345 has been confirmed and is being processed.",
      timestamp: "2 minutes ago",
      type: "order",
      read: false,
    },
    {
      id: "2",
      title: "Flash Sale! 50% Off",
      description: "Don't miss out on our biggest sale of the season.",
      timestamp: "1 hour ago",
      type: "promotion",
      read: false,
    },
    {
      id: "3",
      title: "Payment Successful",
      description: "Payment of $149.99 was successfully processed.",
      timestamp: "2 hours ago",
      type: "payment",
      read: true,
    },
    {
      id: "4",
      title: "Package Delivered",
      description: "Your package has been delivered to your address.",
      timestamp: "1 day ago",
      type: "delivery",
      read: true,
    },
    {
      id: "5",
      title: "Items in Cart",
      description:
        "You left some items in your cart. Complete your purchase now!",
      timestamp: "2 days ago",
      type: "cart",
      read: true,
    },
  ]);

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const removeNotification = (id: string) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  const getIcon = (type: Notification["type"]) => {
    switch (type) {
      case "order":
        return <Package className="h-4 w-4" />;
      case "promotion":
        return <Tag className="h-4 w-4" />;
      case "payment":
        return <CreditCard className="h-4 w-4" />;
      case "delivery":
        return <Package className="h-4 w-4" />;
      case "cart":
        return <ShoppingCart className="h-4 w-4" />;
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {notifications.filter((n) => !n.read).length > 0 && (
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              {notifications.filter((n) => !n.read).length}
            </span>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md p-0">
        <Card className="border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-bold">Notifications</CardTitle>
            {/* <Bell className="h-5 w-5 text-muted-foreground" /> */}
          </CardHeader>
          <CardDescription className="px-6">
            {notifications.filter((n) => !n.read).length} unread notifications
          </CardDescription>
          <CardContent className="p-0">
            <ScrollArea className="h-[400px] p-6">
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={cn(
                      "relative flex items-start space-x-4 rounded-lg border p-4 transition-colors hover:bg-muted/50",
                      !notification.read && "bg-muted"
                    )}
                  >
                    <div
                      className={cn(
                        "mt-1 rounded-full p-2",
                        !notification.read && "bg-primary/10 text-primary",
                        notification.read && "bg-muted text-muted-foreground"
                      )}
                    >
                      {getIcon(notification.type)}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p
                          className={cn(
                            "text-sm font-medium leading-none",
                            !notification.read && "text-primary"
                          )}
                        >
                          {notification.title}
                        </p>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-foreground"
                          onClick={() => removeNotification(notification.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {notification.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-muted-foreground">
                          {notification.timestamp}
                        </p>
                        {!notification.read && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-auto p-0 text-xs font-normal text-primary hover:text-primary/80"
                            onClick={() => markAsRead(notification.id)}
                          >
                            Mark as read
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
