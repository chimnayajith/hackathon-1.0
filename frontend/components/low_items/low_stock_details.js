
const low_details= ({itemData})=>{

    return(
        <div>
            <div className="w-full h-full bg-white px-4 rounded-lg">
            <div className="h-[96%] ">
          <table className="table-fixed w-full">
            <thead>
              <tr className="flex justify-between border-b border-gray-200 py-2 w-full">
                <th className="w-[30%] flex justify-start">Product</th>
                <th className="w-[30%] flex justify-start">Product Id</th>
                <th className="w-[30%] flex justify-start">Category</th>
                <th className="w-[30%] flex justify-start">Stock</th>
              </tr>
            </thead>

            <tbody>
              {itemData.map((item)=> (
                <tr key={item.product_id} className="flex justify-between border-b border-gray-200 py-2 w-full">
                  <td className="w-[30%] flex justify-start">{item.item_name}</td>
                  <td className="w-[30%] flex justify-start">{item.product_id}</td>
                  <td className="w-[30%] flex justify-start">{item.group}</td>
                  <td className="w-[30%] flex justify-start">{item.quantity}</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

            </div>
        </div>
    );

}
export default low_details;