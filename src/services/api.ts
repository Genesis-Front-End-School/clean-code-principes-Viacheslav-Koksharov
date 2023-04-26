import axios from 'axios';

const BASE_URL = 'https://api.wisey.app/api/v1';

const getToken = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/auth/anonymous?platform=subscriptions`,
    );

    const token = await response.data;
    localStorage.setItem('token', JSON.stringify(token));
    return token;
  } catch (error) {
    return error;
  }
};

const getCourses = async token => {
  try {
    const response = await axios.get(`${BASE_URL}/core/preview-courses`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

const getCourseByID = async courseId => {
  try {
    const token = localStorage.getItem('token')
    if (token) {
      const currentToken = JSON.parse(token);
      const response = await axios.get(
        `${BASE_URL}/core/preview-courses/${courseId}`,
        {
          headers: {
            Authorization: `Bearer ${currentToken.token}`,
          },
        },
      );
      return response.data;
    }
  } catch (error) {
    return error;
  }
};

export { getToken, getCourses, getCourseByID };
