import axios from 'axios';

const BASE_URL = 'https://api.wisey.app/api/v1';

const getToken = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/auth/anonymous?platform=subscriptions`,
    );

    const token = await response.data.token;
    localStorage.setItem('token', token);

    return token;
  } catch (error) {
    return error;
  }
};

const getCourses = async (token: string) => {
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

const getCourseByID = async (courseId: string, token: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/core/preview-courses/${courseId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    return error;
  }
};

export { getToken, getCourses, getCourseByID };
