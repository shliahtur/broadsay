import React, { useState, useRef, useCallback } from "react";
import { useSelector } from "react-redux";
import useAssetsFetch from "../hooks/useAssetsFetch";
import Asset from '../components/Asset';
import Counter from "../components/Counter";

const AssetList = () => {
    const limit = 20;
    const [skip, setSkip] = useState(0);
    useAssetsFetch(limit, skip);
    const { data, total, loading, hasMore } = useSelector((state) => state.assets);
    const observer = useRef();
    const lastUserRef = useCallback((node) => {   // Infinite scrolling
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                setSkip(prevSkip => prevSkip + limit);
            }
        });
        if (node) {
            observer.current.observe(node);
        }
    }, [loading, hasMore]);

    if (!data) return (<h1>NO DATA</h1>)
    else
        return (
            <div className='assets'>
                <Counter total={total} />
                <div className='assets-items'>

                    {data.map((asset, index) => {
                        return (
                            <div
                                key={asset._id}
                                ref={data.length === index + 1 ? lastUserRef : null}
                            >
                                <Asset
                                    {...asset}
                                />
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        )
};
export default AssetList;