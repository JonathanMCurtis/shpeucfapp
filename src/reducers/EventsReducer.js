// handle all things related to events
import {
  FETCH_EVENTS,
  CREATE_EVENT,
  DELETE_EVENTS,
  CHECK_IN,
  TYPE_CHANGED,
  TITLE_CHANGED,
  NAME_CHANGED,
  DESCRIPTION_CHANGED,
  DATE_CHANGED,
  TIME_CHANGED,
  LOCATION_CHANGED,
  E_POINTS_CHANGED,
  EVENT_ID_CHANGED,
  EVENT_ERROR,
  GO_TO_CREATE_EVENT,
  GO_TO_CREATE_EVENT_FROM_EDIT,
  GO_TO_EVENT,
  GO_TO_VIEW_EVENT
 } from '../actions/types';

const INITIAL_STATE = {
  eventList: {},
  type: '',
  title: 'Create Event',
  name: '',
  description: '',
  date: '',
  time: '',
  location: '',
  points: 0,
  eventID: {},
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  const { payload } = action;
  
  switch (action.type) {
    case FETCH_EVENTS:
      return { ...state,
        eventList: payload
      };
    case CREATE_EVENT:
      return { ...state,
        loading: true,
        error: ''
      };
    case DELETE_EVENTS:
      return { ...state,
        loading: true,
        type: '',
        name: '',
        description: '',
        date: '',
        time: '',
        location: '',
        points: 0,
        eventID: [],
        error: ''
      };
    case CHECK_IN:
      return {...state};
    case TYPE_CHANGED:
      return { ...state,
        type: payload
      };
    case TITLE_CHANGED:
      return { ...state,
        title: payload
      };
    case NAME_CHANGED:
      return { ...state,
        name: payload
      };
    case DESCRIPTION_CHANGED:
      return { ...state,
        description: payload
      };
    case DATE_CHANGED:
      return { ...state,
        date: payload
      };
    case TIME_CHANGED:
      return { ...state,
        time: payload
      };
    case LOCATION_CHANGED:
      return { ...state,
        location: payload
      };
    case E_POINTS_CHANGED:
      return { ...state,
        points: payload
      };
    case EVENT_ID_CHANGED:
      return { ...state,
        eventID: payload
      };
    case EVENT_ERROR:
      return { ...state,
        error: payload,
      };
    case GO_TO_CREATE_EVENT:
      return INITIAL_STATE;
    case GO_TO_CREATE_EVENT_FROM_EDIT:
      return state;
    case GO_TO_EVENT:
      return INITIAL_STATE;
    case GO_TO_VIEW_EVENT:
      return state;
    default:
      return state;
  }
};
