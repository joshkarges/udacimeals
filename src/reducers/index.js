import {
  ADD_RECIPE,
  REMOVE_FROM_CALENDAR
} from '../actions'
import { combineReducers } from 'redux';

function food (state = {}, action) {
  switch (action.type) {
    case ADD_RECIPE:
      const { recipe } = action;
      return {
        ...state,
        [recipe.label]: recipe
      };
    default:
      return state;
  }
}

const getInitialMealState = () => ({
  breakfast: null,
  lunch: null,
  dinner: null
});

const initialCalendarState = {
  sunday: getInitialMealState(),
  monday: getInitialMealState(),
  tuesday: getInitialMealState(),
  wednesday: getInitialMealState(),
  thursday: getInitialMealState(),
  friday: getInitialMealState(),
  saturday: getInitialMealState()
}

function calendar (state = initialCalendarState, action) {
  const { day, recipe, meal } = action;

  switch (action.type) {
    case ADD_RECIPE:
      return {
        ...state,
        [day]: {
          ...state[day],
          [meal]: recipe.label
        }
      };
    case REMOVE_FROM_CALENDAR:
      return {
        ...state,
        [day]: {
          ...state[day],
          [meal]: null
        }
      };
    default:
      return state;
  }
}

export default combineReducers({
  food,
  calendar
})