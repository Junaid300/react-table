import { useEffect, useState } from 'react'

import Table from "Components/Table"
import { rowSelectionHandler } from 'Components/Table/helper'
import { ColumnsTypes, OnChangeEventType } from 'Components/Table/tableProps'

const App = () => {
    const [tableData ,setData ] = useState([])
    const [order, setOrder] = useState({ key: "", order: "asc" })
    const [selectedRowKeys, setSelectedRows] = useState<string[]>([])

    const onSort = (val: string) => {
        setOrder(prev => ({ key: val, order: prev.order === "asc" ? "desc" : "asc" }))
    }


    const columns = [
        {
            header: "Title",
            dataKey: "title",
            // sort: true,
            // sortKey: "post_title",
            // with: 40,
            // render: (value: any, content: any, callback: OnChangeEventType) => <input type='checkbox' onChange={(e) => callback(content, e.target.checked)} />
            // headRender: (content: ColumnsTypes, callback: OnChangeEventType) => <input onChange={(e) => callback({ key: "post_title", value: e.target.value })} type="text" />,
        },
        {
            header: "complete",
            dataKey: "completed",
            // sort: true,
            // sortKey: "post_description",
            // with: 15,
        },
        {
            header: "userId",
            dataKey: "userId",

        },
    ]

    const data = [
        {
            post_title: "abcdef ipsum dolor sit amet, consectetur adipiscing",
            post_description: "lorem ipsum dolor sit amet, consectetur adipiscing",
            post_likes: "10",
            new_post: "new post",
            community_id: "H52566",
            billee_id: "Y5898",
            compnay_name: "New Company",
            onetwo: [{ name: "salman" }, { name: "rizwan" }]
        },
        {
            post_title: "xyz ipsum dolor sit amet, consectetur adipiscing",
            post_description: "lorem ipsum dolor sit amet, consectetur adipiscing, lorem ipsum dolor sit amet",
            post_likes: "10",
            new_post: "new post",
            community_id: "H52566",
            billee_id: "Y5898",
            compnay_name: "New Company",
            onetwo: [{ name: "salman" }, { name: "rizwan" }]
        },
    ]

    useEffect(()=>{
        handleFetchTodos()
    },[])

    const handleFetchTodos = async() => {
        try {
            const data =  await fetch('https://jsonplaceholder.typicode.com/todos',{
                method: 'Get'
            }).then(res=>res.json())
            setData(data)
            console.log(data)
        }
        catch(error) {
            console.log(error)
        }
        // https://jsonplaceholder.typicode.com/todos
    }
    return (
        <Table
            columns={columns}
            data={tableData}
            // onSort={onSort}
            // order={order}
            // onChange={(key, value) => console.log(key, value)}
            // expandable={{ expandedRowRender: (record: any) => <td colSpan={columns.length + 1}>{record?.onetwo?.map((item: any, index: any) => <p key={`${item.name}${index}`}>{item.name}</p>)} </td> }}
            // onRowSelection={{
            //     type: "chekbox",
            //     selectedRowKeys,
            //     onChange: (newSelectedKeys: string | string[]) => {
            //         setSelectedRows(prev => rowSelectionHandler(prev, newSelectedKeys));
            //     }
            // }}
            // rowKey={"post_description"}
        />
    )
}

export default App