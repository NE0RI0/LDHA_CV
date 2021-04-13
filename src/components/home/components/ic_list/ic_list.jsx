import React from 'react'
import { InfoCard } from '../info_card/info_card'
import './styles/ic_list.css'

export const IcLlist = props => (
    {props.data.map(item=>(
        <InfoCard key = {item.id} item = {item} 
    ))}
)