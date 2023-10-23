"use client";

import EditableSection from "@/common/EditableSection";

const ProfileModal = () => {
    return(
        <div> 
            <h2>Update Profile</h2>
            <EditableSection title={"Username"} placeholder={"update username"} 
            onChangeHandler={(value: string): void => {
                console.log("username");
            } } />
        </div>
    )
}

export default ProfileModal;