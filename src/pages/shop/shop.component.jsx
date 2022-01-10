import React from "react";
import shopData from "./shop.data";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: shopData
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <PreviewCollection key={id} {...otherCollectionProps}></PreviewCollection>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;