import React from 'react';
import { X, Search, Truck, Package, Clock } from 'lucide-react';
import './ShopPopup.css';

const regions = [
    {
        id: 1,
        name: 'العرين',
        deliveryFee: '0.000',
        minOrder: '2.500',
        deliveryTime: '1',
        link: '/shop/al-areen'
    },
    {
        id: 2,
        name: 'جميع مناطق البحرين (لا يشمل العرين وجو وعسكر ودرة البحرين)',
        deliveryFee: '0.000',
        minOrder: '1.000',
        deliveryTime: '1',
        link: '/shop/bahrain'
    },
    {
        id: 3,
        name: 'جو',
        deliveryFee: '0.000',
        minOrder: '2.000',
        deliveryTime: '1',
        link: '/shop/jaw'
    },
    {
        id: 4,
        name: 'درة البحرين',
        deliveryFee: '0.000',
        minOrder: '4.000',
        deliveryTime: '1',
        link: '/shop/durrat-al-bahrain'
    },
    {
        id: 5,
        name: 'عسكر',
        deliveryFee: '0.000',
        minOrder: '2.000',
        deliveryTime: '1',
        link: '/shop/askar'
    }
];

const ShopPopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="shop-popup-overlay" onClick={onClose}>
            <div className="shop-popup-content" onClick={(e) => e.stopPropagation()}>
                <div className="shop-popup-header">
                    <h2 className="shop-popup-title">اختيار المنطقة</h2>
                    <button className="shop-popup-close" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                <div className="shop-popup-body">
                    {/* <div className="shop-popup-search">
                        <Search className="shop-popup-search-icon" size={18} />
                        <input type="text" placeholder="بحث" />
                    </div> */}

                    <div className="shop-popup-list-title">قائمة العناوين</div>
                    <div className="shop-popup-list-subtitle">التوصيل
                        التوصيل مجانا للطلبات أعلى من BHD 20.000</div>

                    <div className="shop-popup-list">
                        {regions.map((region) => (
                            <a key={region.id} href={region.link} className="shop-popup-item" onClick={onClose}>
                                <div className="shop-popup-item-name">{region.name}</div>
                                <div className="shop-popup-item-details">
                                    <div className="shop-popup-detail">
                                        <Clock size={18} />
                                        <span>days {region.deliveryTime}</span>
                                    </div>
                                    <div className="shop-popup-detail">
                                        <Package size={18} />
                                        <span>BHD {region.minOrder}</span>
                                    </div>
                                    <div className="shop-popup-detail">
                                        <Truck size={18} />
                                        <span>BHD {region.deliveryFee}</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopPopup;
