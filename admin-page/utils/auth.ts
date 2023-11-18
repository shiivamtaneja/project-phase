export const checkUserSession = async () => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + '/check-session', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error checking user session:', error);
    return false;
  }
};