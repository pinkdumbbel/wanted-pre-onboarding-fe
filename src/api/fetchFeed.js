const fetchFeeds = async () => {
  try {
    const res = await fetch('/data/data.json');
    const json = res.json();
    return await json;
  } catch (e) {
    alert(
      '피드를 불러 오는 도중 문제가 발생하였습니다. 관리자에게 문의 하세요'
    );
  }
};

export default fetchFeeds;
