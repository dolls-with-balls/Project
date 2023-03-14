import React from "react";
import style from "../style/UserProfile.module.css";
import headerLogo from "../Assets/logoblack.png";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
export const UserProfile = () => {
  return (
    <>
        <div className={style.headerContainer}>
      <div className={style.headerCenter}>
        <div className={style.headerNav}>
          <div className={style.headerSearch}>
            <a href="/">
              <img className={style.logo} src={headerLogo} alt="" />
            </a>
            <span className={style.divider}></span>
            <form className={style.headerForm} action="/search">
              <BiSearch className={style.searchIcon} />
              <input
                className={style.searchBar}
                placeholder="Хайлт хийх"
                type="text"
              />
            </form>
          </div>
          <div className={style.headerFlip}>
            <span className={style.opacity05}>Дараагийн нийтлэл:</span>
            <span className={style.nextArticleCategory}>Номын тухай</span>
            <button className={style.headerButton}>
              Өнөөдөр орно <li className={style.dot}></li>
            </button>
          </div>
          <div className={style.socialLinks}>
            <a href="">
              <AiFillFacebook
                className={style.fb}
              />
            </a>
            <a href="">
              <AiOutlineInstagram
                className={style.ig}
              />
            </a>
            <a href="">
              <AiOutlineTwitter
                className={style.tw}
              />
            </a>
            <a href="">
              <FaLinkedinIn
                className={style.ln}
              />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className={style.profileContainer}>
      <div className={style.innerProfileContainer}>
        <div className={style.profileBtn}>Нийт 88 нийтлэл</div>
        <div className={style.profile}>
          <img className={style.profileImg} src="https://unread.today/files/profile/91cd813b12beb8323a656b349556e879.jpg"/>
          <div className={style.profileName}>Majigsuren Tsogbadrakh</div>
          <div className={style.profileLoc}>Ulaanbaatar, Mongolia</div>
          <div className={style.profileDesc}>Content writer</div>
        </div>
      </div>
    </div>

    <div className={style.midSection}>
      <div className={style.innerMidSection}>
        <div className={style.midSectionBlue}>Buh niitlel (88)</div>
        <div className={style.midSectionText}>Ontsloh(7)</div>
      </div>
    </div>

    <div>
      <div className={style.container}>
              <div className={style.innerContainer}>
                  {/* 1 */}

                  <div className={style.smallPostContainer}>

                      <div className={style.postR}>
                          <div className={style.postInfoContainer}>
                              <div className={style.postInfoR}>
                                  <div className={style.infoText}>
                                      <div className={style.profileNameR}>Majigsuren Tsogtbadrakh</div>

                                      <div className={style.infoDateContainerR}>
                                          <div>3 sarrin 3, 2023 </div>
                                      </div>
                                  </div>

                                  <div className={style.infoImage}>
                                      <img className={style.profileImage} src="https://unread.today/files/profile/91cd813b12beb8323a656b349556e879.jpg"/>
                                  </div>
                              </div>
                          </div>


                          <div className={style.smallPostR}>
                              <div className={style.smallPostDesc}>
                                  Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic
                              </div>

                              <div className={style.smallPostImageContainer}>
                                  <img className={style.smallPostImage} src="https://unread.today/files/969a1aed-77a4-45e9-b7b7-3ee2709aaf31/7622443e7692181070e9dba4d8570e28_square.png"/>
                              </div>
                          </div>
                      </div>

                  </div>

                  {/* 2 */}

                    <div className={style.smallPostContainer}>
                        <div className={style.postL}>
                            <div className={style.postInfoContainer}>
                                <div className={style.postInfoL}>
                                    <div className={style.infoImage}>
                                        <img className={style.profileImage} src="https://unread.today/files/profile/91cd813b12beb8323a656b349556e879.jpg"/>
                                    </div>

                                    <div className={style.infoText}>
                                        <div className={style.profileNameL}>Majigsuren Tsogtbadrakh</div>

                                        <div className={style.infoDateContainerL}>
                                            <div>3 sarrin 3, 2023 </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className={style.smallPostL}>
                                <div className={style.smallPostDesc}>
                                    Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic
                                </div>

                                <div className={style.smallPostImageContainer}>
                                    <img className={style.smallPostImage} src="https://unread.today/files/969a1aed-77a4-45e9-b7b7-3ee2709aaf31/7622443e7692181070e9dba4d8570e28_square.png"/>
                                </div>
                            </div>
                        </div>
                    </div>

                  {/* 3 */}

                  <div className={style.smallPostContainer}>
                      <div className={style.postR}>
                          <div className={style.postInfoContainer}>
                              <div className={style.postInfoR}>
                                  <div className={style.infoText}>
                                      <div className={style.profileNameR}>Majigsuren Tsogtbadrakh</div>

                                      <div className={style.infoDateContainerR}>
                                          <div>3 sarrin 3, 2023 </div>
                                      </div>
                                  </div>

                                  <div className={style.infoImage}>
                                      <img className={style.profileImage} src="https://unread.today/files/profile/91cd813b12beb8323a656b349556e879.jpg"/>
                                  </div>
                              </div>
                          </div>


                          <div className={style.smallPostR}>
                              <div className={style.smallPostDesc}>
                                  Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic
                              </div>

                              <div className={style.smallPostImageContainer}>
                                  <img className={style.smallPostImage} src="https://unread.today/files/969a1aed-77a4-45e9-b7b7-3ee2709aaf31/7622443e7692181070e9dba4d8570e28_square.png"/>
                              </div>
                          </div>
                      </div>
                    </div>
                  </div>

                  {/* 4 */}

                    {/* <div className={style.smallPostContainer}>
                          <div className={style.postL}>
                              <div className={style.postInfoContainer}>
                                  <div className={style.postInfoL}>
                                      <div className={style.infoImage}>
                                          <img className={style.profileImage} src="https://unread.today/files/profile/91cd813b12beb8323a656b349556e879.jpg"/>
                                      </div>

                                      <div className={style.infoText}>
                                          <div className={style.profileNameL}>Majigsuren Tsogtbadrakh</div>

                                          <div className={style.infoDateContainerL}>
                                              <div>3 sarrin 3, 2023 </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>


                              <div className={style.smallPostL}>
                                  <div className={style.smallPostDesc}>
                                      Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic
                                  </div>

                                  <div className={style.smallPostImageContainer}>
                                      <img className={style.smallPostImage} src="https://unread.today/files/969a1aed-77a4-45e9-b7b7-3ee2709aaf31/7622443e7692181070e9dba4d8570e28_square.png"/>
                                  </div>
                              </div>
                          </div>
                    </div> */}


              </div>    
        </div>
    </>
  );
};