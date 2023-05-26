import { Avatar, Button, Card, Row, Space, Tag } from "antd";
import styles from "../../styles/talent.module.css";
import Meta from "antd/es/card/Meta";
import "@fortawesome/fontawesome-free/css/all.css";
export default function CardTalent() {
  const item = {
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing 1",
    imageUrl:
      "https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg",
  };

  return (
    <Card className={styles["gallery-card"]} hoverable>
      <Row className={styles["space-between"]}>
        <Meta
          avatar={
            <Space wrap size={16}>
              <Avatar
                src="https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg"
                shape="square"
                size={64}
              />
            </Space>
          }
          title="James David"
          description="UX Reseacher"
        />
        <Space>
          <a href="#" className={styles["social-media-button"]}>
            <i className="fab fa-linkedin"></i>
          </a>

          <a href="#" className={styles["social-media-button"]}>
            <i className="fas fa-globe"></i>
          </a>
        </Space>
      </Row>
      <div className={styles["view-container"]}>
        <span className={styles["viewed-text"]}> Viewed by 20 people</span>
      </div>
      <Row
        className={styles["space-between"]}
        style={{ paddingBottom: "20px" }}
      >
        <div>
          <i class="fas fa-briefcase"></i>
          <span> Experience </span>
        </div>
        <div>
          <span>1 year 5 months</span>
        </div>
      </Row>
      <Row
        className={styles["space-between"]}
        style={{ paddingBottom: "20px" }}
      >
        <div>
          <i class="fas fa-briefcase"></i>
          <span> Open to </span>
        </div>
        <div>
          <Button className={styles["time-role-btn"]}>Full time</Button>
        </div>
      </Row>
      <Row
        className={styles["space-between"]}
        style={{ paddingBottom: "20px" }}
      >
        <div>
          <i class="fas fa-briefcase"></i>
          <span> Skills </span>
        </div>
        <div>
          <Space>
            <Button className={styles["skill-set-btn"]}>Full time</Button>
            <Button className={styles["skill-set-btn"]}>+2</Button>
          </Space>
        </div>
      </Row>
      <Row
        className={styles["space-between"]}
        style={{ paddingBottom: "20px" }}
      >
        <div>
          <Space>
            <i class="fas fa-briefcase"></i>
            <i class="fas fa-briefcase"></i>
          </Space>
        </div>
        <div>
          <Button className={styles["view-profile-btn"]}>Press to view profile</Button>
        </div>
      </Row>
    </Card>
  );
}
