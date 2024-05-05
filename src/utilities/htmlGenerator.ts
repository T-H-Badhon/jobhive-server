const resetHTML = (reset_token: string) => {
  const link = `http://localhost:3000/reset-password/${reset_token}`;

  const html = `
        <div>
            <p>Your password reset link</p>
            <a href=${link}><button>Reset Password</button></a>
        </div>
    `;

  return html;
};

export const htmlGenerator = {
  resetHTML,
};
