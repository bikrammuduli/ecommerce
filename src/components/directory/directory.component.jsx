import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'
import { connect } from 'react-redux'

const Directory = ({ directoryDetails }) => (
    // constructor() {
    //     super()

    //     this.state = {
    //         sections: [
    //             {
    //                 title: 'hats',
    //                 imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    //                 id: 1
    //             },
    //             {
    //                 title: 'jackets',
    //                 imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    //                 id: 2
    //             },
    //             {
    //                 title: 'sneakers',
    //                 imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    //                 id: 3
    //             },
    //             {
    //                 title: 'womens',
    //                 imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    //                 size: 'large',
    //                 id: 4
    //             },
    //             {
    //                 title: 'mens',
    //                 imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    //                 size: 'large',
    //                 id: 5
    //             }
    //         ]
    //     }
    // }
    <div className='directory-menu'>
        {
            directoryDetails.map(
                ({ id, title, imageUrl, size }) => (
                    <MenuItem
                        key={id}
                        title={title}
                        imageUrl={imageUrl}
                        size={size}
                    />
                )
            )
        }
    </div>
)

const mapStateToProps = ({ directory }) => (
    {
        directoryDetails: directory.sections
    }
)

export default connect(mapStateToProps, null)(Directory)