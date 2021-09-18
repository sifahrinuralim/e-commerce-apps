// import React, { useState, useEffect } from 'react'
import Account from './AccontDB'
import '../../Style/Main.css'

function MainAccount(props) {
    const { openModal, openDelete, fetchData, setAccountData } = props

    return (
        <div className="main">
            <h1>-List Account Team 1 Market-</h1>

            <table className="bookTable">
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Status User</th>
                    <th>Edit Account</th>
                    <th>Delete Account</th>
                </thead>
                {
                    fetchData.map((account, key) => {
                        console.log(account);
                        return (
                            <Account
                                key={account.id}
                                setAccountData={setAccountData}
                                accountId={account.id}
                                name={account.name}
                                email={account.email}
                                password={account.password}
                                status_user={account.status_user}
                                openDelete={openDelete}
                                openModal={openModal} />
                        )
                    })
                }
            </table>
        </div>
    )
}

export default MainAccount