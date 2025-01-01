import Cover from "../../Shared/Cover/Cover";
import orderImg from "../../../assets/shop/order.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../../Shared/OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories = ["salad", "dessert", "pizza",  "soup","drinks",]
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()
    const salad = menu.filter(item => item.category === "salad")
    const dessert = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const soup = menu.filter(item => item.category === "soup")
    const drinks = menu.filter(item => item.category === "drinks")

    return (
        <div>
            <Helmet>
                <title>Order Food || Bistro Boss</title>
            </Helmet>
            <Cover title={"Order Now"} image={orderImg} subTitle={"Would you like to try a dish?"}></Cover>
            <section>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Drinks</Tab>

                    </TabList>

                    <TabPanel> <OrderTab items={salad} ></OrderTab> </TabPanel>
                    <TabPanel> <OrderTab items={dessert} ></OrderTab> </TabPanel>
                    <TabPanel> <OrderTab items={pizza} ></OrderTab> </TabPanel>
                    <TabPanel> <OrderTab items={soup} ></OrderTab> </TabPanel>
                    <TabPanel> <OrderTab items={drinks} ></OrderTab> </TabPanel>


                </Tabs>
            </section>
        </div>
    );
};

export default Order;