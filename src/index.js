import './styles/globals.scss';

const user = {
  github: 'nogueirawelton',
  linkedin: 'nogueirawelton',
  facebook: 'nogueirawelton201',
  instagram: 'nogueirawelton201',
  twitter: 'nogueirawelton',
};

function changeSocialMediaLinks() {
  const socialLinks = document.querySelectorAll('[data-social-media]');
  socialLinks.forEach((socialLink) => {
    const data = socialLink.dataset.socialMedia;
    const ldn = data === 'linkedin' ? 'in/' : '';
    socialLink.href = `https://${data}.com/${ldn}${user[data]}`;
  });
}

async function setGithubData() {
  const url = `https://api.github.com/users/${user.github}`;
  const { avatar_url, name, login, html_url, bio } = await (
    await fetch(url)
  ).json();

  userAvatar.src = avatar_url;
  userName.textContent = name;
  userLogin.textContent = login;
  userLogin.href = html_url;
  userBio.textContent = bio;
}
setGithubData();
changeSocialMediaLinks();
