import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAssets } from '../redux/actions/assets';

const useAssetsFetch = (limit, skip) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAssets(limit, skip));
  }, [skip]);
};
export default useAssetsFetch;