import React from "react";

const userComponent = ({dataForm}) => {
    return (
        <>
            <div className="rounded bg-green-l border border-success p-4 border border-secondary  fade-data">
                <p> <strong className="font-weight-bold">Nombre: </strong> {dataForm.name}</p>
                <p> <strong className="font-weight-bold">Mail: </strong> {dataForm.mail}</p>
                <p> <strong className="font-weight-bold">País: </strong> {dataForm.country}</p>
                <p> <strong className="font-weight-bold">Ciudad: </strong> {dataForm.city}</p> 
            </div>
        </>
    )
}

export default userComponent;