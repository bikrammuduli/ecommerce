import React from 'react'
import './shop-page.styles.scss'
//import SHOP_DATA from './shop.data'
import { CollectionPreview } from '../../components/collection-preview/collection-preview.component'
import { connect } from 'react-redux'

// class ShopPage extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             collections: SHOP_DATA
//         }
//     }
//     render() {
//         const { collections } = this.state
//         return (
//             <div className='shop-page'>
//                 {
//                     collections.map(
//                         ({ id, ...otherCollectionProps }) =>
//                             (
//                                 <CollectionPreview key={id} {...otherCollectionProps} />
//                             )
//                     )}
//             </div>
//         )
//     }
// }

const ShopPage = ({ shopList }) => (
    <div className='shop-page'>
        {
            shopList.map(
                ({ id, ...otherCollectionProps }) =>
                    (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    )
            )}
    </div>
)


const mapStateToProps = ({ shop }) => (
    {
        shopList: shop.SHOP_DATA
    }
)

export default connect(mapStateToProps, null)(ShopPage)