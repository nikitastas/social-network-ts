import React, {useEffect} from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {ProfileResponseType, setUserProfile} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";

type MapStatePropsType = {
    profile: ProfileResponseType
}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileResponseType) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

function ProfileContainer(props: PropsType) {

    let { userId } = useParams()
    if (!userId) {
        userId = '22469'
    }

    useEffect(() => {
        axios.get<ProfileResponseType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(res => {
                props.setUserProfile(res.data)
            })
    }, [])

    return (
        <div>
            <Profile {...props} profile={props.profile}/>
        </div>
    )
}

let mapStateToProps = (state: RootState): MapStatePropsType => ({
    profile: state.profilePage.profile
})


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)