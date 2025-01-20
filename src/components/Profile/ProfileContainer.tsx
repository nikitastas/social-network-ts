import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {ProfileResponseType, setUserProfile} from "../../redux/profile-reducer";

type Props = {
    setUserProfile: (profile: ProfileResponseType) => void
    profile: ProfileResponseType
}

class ProfileContainer extends React.Component<Props> {

    componentDidMount() {
        axios.get<ProfileResponseType>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(res => {
                this.props.setUserProfile(res.data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}

let mapStateToProps = (state: RootState) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)