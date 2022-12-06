import { useQuery } from '@apollo/client';
import { Select } from 'antd';
import {IFilterProps} from './filter.types'
import { getDate } from '../../../commons/utils/utils';
import { useState } from 'react';


export default function Filter(props:IFilterProps) {

    const current = getDate(new Date())
    const pass = "2022-01-01"

    const [order, setOrder] = useState("")

    const onHandle = (value:any) => {
        props.dateSetting(value)
        console.log(value)
    };

    // const onClickNewDate = () => {
    //   props.refetch({startDate: current, page:1})
    // };

    // const onClickOldDate = () => {
    //   props.refetch({endDate: pass, page:1})
    // };



    return(
        <Select
        defaultValue="최신순"
        style={{ width: 120 }}
        bordered={true}
        onChange={onHandle}

        options={
        [
          {
            value: current,
            label: '최신순',
          },
          {
            value: pass,
            label: '오래된순',
          },
        ]
        }
      />
    )
}