import { TabBar } from "antd-mobile";
import { Home2, Card, TicketDiscount, Scan, Setting2 } from "iconsax-react";

const tabs = [
  {
    title: "Chats",
    activeIcon: <Home2 variant="Bold" size="28" />,
    deactiveIcon: <Home2 size="28" />,
  },
  {
    title: "Contacts",
    activeIcon: <Card variant="Bold" size="28" />,
    deactiveIcon: <Card size="28" />,
  },
  {
    title: "Settings",
    activeIcon: <TicketDiscount variant="Bold" size="28" />,
    deactiveIcon: <TicketDiscount size="28" />,
  },
];

function Footer() {
  return (
    <TabBar
      className="border-t border-t-stroke-mainDark bg-neutral-100 "
      style={{
        padding: "12px 0",
        zIndex: "var(--adm-floating-panel-z-index, 900)",
      }}
    >
      {tabs.map((item) => (
        <TabBar.Item
          key={item.title}
          title={
            <p type="title2" className="text-primary-50 mt-1 inline-block">
              {item.title}
            </p>
          }
          style={{ padding: 0 }}
        />
      ))}
    </TabBar>
  );
}

export default Footer;
