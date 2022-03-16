import * as actionType from './actionType'
import {
    getAllMv,
    getNewMv,
    getExclusiveMv,
    getMvRanking
} from '@/service/mv'
export const changeAllMvAction = (res) => {
    return {
        type: actionType.CHANGE_ALL_MV,
        allMv: res.data,
    }
}

export const changeNewMvAction = (res) => {
    return {
        type: actionType.CHANGE_NEW_MV,
        newMv: res.data,
    }
}

export const changeExclusiveMvAction = (res) => {
    return {
        type: actionType.CHANGE_EXCLUSIVE_MV,
        exclusiveMv: res.data,
    }
}

export const changeMvRankingAction = (res) => {
    return {
        type: actionType.CHANGE_MV_RANKING,
        mvRanking: res.data,
    }
}

export const getAllMvAction =(area, order, limit, offset)=> {
    return (dispatch) => {
        getAllMv(area, order, limit, offset).then((res) => {
            dispatch(changeAllMvAction(res))
        })
    }
}
export const getNewMvAction =(limit)=> {
    return (dispatch) => {
        getNewMv(limit).then((res) => {
            dispatch(changeNewMvAction(res))
        })
    }
}
export const getExclusiveMvAction =(limit)=> {
    return (dispatch) => {
        getExclusiveMv( limit).then((res) => {
            dispatch(changeExclusiveMvAction(res))
        })
    }
}
export const getMvRankingAction =(area, limit)=> {
    return (dispatch) => {
        getMvRanking(area, limit).then((res) => {
            dispatch(changeMvRankingAction(res))
        })
    }
}