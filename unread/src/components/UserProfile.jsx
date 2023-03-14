import React, { useEffect, useState } from "react";
import style from "../style/UserProfile.module.css";
import { HeaderWhite } from "./HeaderWhite";
import { Avatar } from "@mantine/core";
import { client } from "../client";
import { useParams } from "react-router-dom";
export const UserProfile = () => {
  const params = useParams();
  const [user, setUser] = useState();
  useEffect(() => {
    client
      .get(`/user/${params.id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <HeaderWhite />

      <div className={style.profileContainer}>
        <div className={style.innerProfileContainer}>
          <div className={style.profileBtn}>Нийт 88 нийтлэл</div>
          <div className={style.profile}>
            <Avatar style={{ width: "150px", height: "150px" }} />
            <div className={style.profileName}>{user && user.username}</div>
            <div className={style.profileLoc}>Ulaanbaatar, Mongolia</div>
            <div className={style.profileDesc}>Content writer</div>
          </div>
        </div>
      </div>

      <div className={style.midSection}>
        <div className={style.innerMidSection}>
          <div className={style.midSectionBlue}>
            Buh niitlel ({user && user.posts.length})
          </div>
          <div className={style.midSectionText}>
            Ontsloh({user && user.posts.length})
          </div>
        </div>
      </div>

      <div>
        <div className={style.container}>
          <div className={style.innerContainer}>
            {user &&
              user.posts.map((item, index) => {
                console.log(item);
                return (
                  <div className={style.smallPostContainer} key={index}>
                    <div className={style.postR}>
                      <div className={style.postInfoContainer}>
                        <div className={style.postInfoR}>
                          <div className={style.infoText}>
                            <div className={style.profileNameR}>
                              {user && user.username}
                            </div>

                            <div className={style.infoDateContainerR}>
                              <div>
                                {user.posts && user.posts[0].createdAt}{" "}
                              </div>
                            </div>
                          </div>

                          <div className={style.infoImage}>
                            <Avatar />
                          </div>
                        </div>
                      </div>

                      <div className={style.smallPostR}>
                        <div className={style.smallPostDesc}>{item.title}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
