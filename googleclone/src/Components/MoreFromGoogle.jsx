import React from "react";
import userImg from "./Images/user.png";
export default function MoreFromGoogle({ top }) {
  const alloptions = [
    {
      name: "Account",
      link: "https://myaccount.google.com/?utm_source=OGB&utm_medium=app",
      imgLink: userImg,
    },
    {
      name: "Google",
      imgLink:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAABBVBMVEX////qQzU0qFNChfT7vAVWj/UufPPY4/z7uQA2f/T74d+vx/onpUvpMh/qQTL7tgAaokPpNiXpOyvoJAjynpn+9/f2vbrwhH398O/rVUrpOjdMivT+79T95rs8gvTs9e5luHn4z83zpaHvfXbvd3D4yMbubmbtZFr1s6/xkYvpLBbqSTzyl5L62df0mUn4qBb8zGXtXDDxfSj8wwD2nBzrUTPwcS3/+/L92YPh6v3L2vv94Ke6zvoedvN7r0vs8f780HPnuiDL5dGgvfnBtjJWs2x5pPaRsUW83sNbq07WuCewvFt+vKeYzaQ4p2JEiud9wY1Ck8k+naA6pXVBjtkpqDhGmrqSGifYAAACTklEQVRIic2Ue3vSMBSHQwgdrA2k6WCwcZ0g0G3epqLIZKJMvHTiZX7/j2LvSUpSCo8+j++fOX05v5zTAsB/Qu/sQYNalmU2+keDalar9tDCJi3nPMqUYms4yuBWLzAOHEbZtMf1Ld6ZTXMyqH2Uph2em1LNwzw/VHojKxlSCGyNFN6xnaJ52GOp11fHDFtiadh9vQssPkZN7BHtU+kNLPHH6XHtsl6vX9bGuWCtCq8q9MONAVfrDbHSA33Kt6slqjVMFV6PWwRtbL5dddXyH50wbyh/REoTPY5zNnbwwJMiKj4NmuJtX4FABSF09cwzN+aSSquIPPP5yY5BwY0voqvKCzzY/jQHinm5kzepRF7xlViZnRak5INysxiLLVHUS3kp2mu/3GLiJJtYmvrlN0wEGcVZQkRZRf1viZmj6vsOZ7bnOsKpql8A/VrjYL+iHQT12ENvRXF+wMP6X4f18CVH7yBZADXvWcvwJJzOBwjhMkU8jbT2bXTkX/Kj60GyUnpTLbEN4P91oE/Qx+ioxEI7ns08OmtWPsMIVVh2w3aBnX6JPWjIzVkcNFq/z4LwpiQt5+VLfKFrQE5NTqjzVWszTxdKXEt3tkte7TiE3H3bWGLISjAhMdarRcdl4SyJl4Z8D8Nq00QcRzShYRCf6A73P/yepVuQRLimBPIz3xZWkdk04C8tL/EAWJN0E97/nkvFjXsmwy4ncs+dPFTHNYij0oKmctUgshdKaOquW6alfeIRq667vqixt0/obOnGWDjrJfTWf9d1Vpmtf8sfWB47XkVrGqkAAAAASUVORK5CYII=",
      link: "https://www.google.com/",
    },
    {
      name: "Maps",
      imgLink:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADTklEQVR4AcWUY7AbURxHb23btruoEdYKatt4rG3b5ia1bdu2oyKeF93e7Uw69yHZF/bMnM/nN/+9s8B3YIpCEarahSK+9ywUoZ5QKFI1o2CUaniByG8NK02GaUGoKD7yV/aCkeo5yM8FI1UwocWiNV95040q5AzxZGPeoMYLRKilKKLCg7hFozW2htOMkD/D5FbHn26UByWOAsOQLk/xwlEqWG+K4V8clzfDNCag+PlWHftUHf7c6SleCElP/s3GPDvTOMivuJZHltMIKPPrJjwTb/C1JAdUH/+LjXBpEU3TlwG+ohHQu9EAyPpJVN/Vue8BiMcrjtFxxt3WW7Vju09xlZgugcJONu5WJaDh2G4r/8aLx7Av3jxFMMPIE041VRFMN0WgkCGpeP1lh20kI3UQ2yQFQHJBweF4HHe3bPDVmlN/EyAB/OnWYoIZpm94vOHCW5DcJXeiAZBQSCJ9GbAnyQFi0mKam78n8IBgprmtO9547htI7ewGUdztVl8GXEsUF5Iu67qcZjgZpASegDAFiv/izdJAettgPA4pRnrJlwEPEg4wzcsPbWdSvQcc8Gfq39fePMHJRnEJRvo0+QOE5Ek8ro8tAe1nUrPa4XmQHXig8eRf2eusX6jHw/5eYLM7/qtvOWg/ncY9ADrOpFoBPFB7a/RCPIpL7JIqfLgAPYyN6+RVHbaj6dgwrgs5AV0i9b9PrwSpVhyuvASFnF4GDE/+X1BUo6C2CaGP25MRDyf0FbrGGvvZ1Hufncipq81IrHgwoTTTrizwBcu2bPvZEJea05lgM2WLOG9xUiE7BXwl7mTa8igQ5y1uPpMW9trLYyNepZTyRsAf7KdTT/Y2YPx+mjNOMJLtwF/gMZAOhV4kFV9/qCJnnFRIPxM7O+UGgWA7naYGClrw+KljRSHFEUfaCaW8PggG6LV3cccfn8gN6yja2Tm/u0IyBgQT9B4WfTuZ2d5Q0fY39+llxwEEKUAwYX88zZXN9nM/OumXGkp5HhAKauyQFEMRvZcBjpq7ZA1AKCF3Sbp5GTAOhAP2z5bE6R/g3z2kUIyESjigJiNrCcIJxUhPYAPugXCDvwV0/ggQbmpt75IVxa1IRx2lvBD4HxCMTM5eAgTAH+U/98Xb8bmuAAAAAElFTkSuQmCC",
      link: "https://maps.google.com/",
    },
    {
      name: "Youtube",
      imgLink:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA3ElEQVR4Ae2WIQzDIBBFEdPV6Ip6L2Y3Me9NMzuB98GbWrysqHf1otWYismm+vYFTRCEhXXjJrjkmSslLwHgi8vjxkoRKAL/J0BCSHAHGhjQgxHMwIKnY/Px+taNHd2/Bmg3p4wKuIH0Y1RQAB+ugDJxDgn0GQVMSMBmFJhDApSTYwLLQtR13xNAo0oWINS6ErXtpxInX0CmC3g1TURNkypQ+QL1IYG9hiFFRPIL8C8B/ybkO4bsFxH7Vcz+GLE/x5yBRL+LZDVQkTi2Ochn70dimQpFspKKi0AReAF/IVUTZ3/BGQAAAABJRU5ErkJggg==",
      link: "https://www.youtube.com/",
    },
    {
      name: "Play",
      imgLink:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA4CAMAAACIelvlAAAAkFBMVEX///8agDmU/taW/9kLeCt12q2Z/90igz8TfDIAeioMfTIAdRwAdySR+tKb/+ASfjWXvJ/3+vhcmmrK281Ul2Q7i09poXbw9fG+1MNKklze6eBNrHeK8ciC6L4qjEsAchONtZU+nWSkw6uvyrV6qoRpypwvhkYzk1Zdvo3P/OmL/tO7++Gl+9nu/fbd/O+Fu5c1F39gAAACGElEQVRIiZ2W6XaCMBCFSYIxaDCt1qUVF1oBa7f3f7tOCEs2EJxfHA+fM3NzM0wQBMFqk6OX92BELOczhEQUfQwnIqSCr1fDiNUc1SHmm+0QZDNDbczmTwOQHBkRod1dZGoiUN3r20hEQpfnkQi0xHtPyYdAS9Mewf0IVLfsFLwDkYKfxyJQXYeHehDpIZ/gvYjfQyx0ghktccdDEyeyPQuNlmwPYeIEpRliRnWmh2LcBCHtU2okEifdQw1C4ixLGojuDcbwUI2QBITgh5YphCV4vrIQmkL5oqBN0gN3BK881CBH+a9hg+BFaqWB6k5nA5HFs7RFyCS0EenwbYXQBSXxkXOUEPmomNiurEyUlwhJUpHCy4cJIfEeFZUGCw8BKuxKhDHERHkutAiR4Epr6jYj02wAUUWHE1LLxK4KuTIPgnILSTTE279CVGHMKYwcfEhZmGyfte2zorGAD1HtY1KJHBoiV6drJVn3HKX8yem/PUqfYSC5LZltGMuWrmSOLUvzh635cS1507dj/vKKxToh1W9ritwrhvWLXBdbXzPzIuvjAtuIksweF/o4surCJJP9O0NJH31HbPUCknlGnz5gmc0k3DdgjZnMjmZDJL8/xs08t08P4Ex+jbl9eQH3YwGMAr5/Ogj3+wL9ABD/dgG+TxLk6WiiExGnvz7goYVkbRJD1p7L+OXqgRXugUUR9r7R6+jopfcfnlQmjT0Sj48AAAAASUVORK5CYII=",
      link: "https://play.google.com/",
    },
    {
      name: "News",
      imgLink:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFVUlEQVR4AY3XA5AkiRKH8V9WVfdg7X1n27Zt+wLPtm3btm3btq3z3d7OehqVjxtXUTHTMV9HRmXz/3WWwwxcmE9++g3v+9WTzEJAhD7WZphKdokU0mxse+W+z/hYPP3JWlRmYPr2jQdrkcKGCLcJa/rJNEfWfQ/tbrDrgi2uH9zNdslEAilH/eZoAVUx3CTcjluzINGvPbna6JBqnd0XTNlh5Q3md9YAwXv+erJ3Wupd80uCpZmW1szPWoWiWw3nLPDZcrJ/35h2XLXRntVaO3VvsXz8BiBJpVplkJMgou+kdf909Gs3eekKbtxhzF9XjfnNso5PLu765njBlpxRIADyK9UxuBTH53BweBRAIrOjVhEBCE0UQ4Pbl1v3gp3EolpRp2JYi0Eqe7WpZZWx7ebdsOJPG1+kG9+Oz3zne20B01+osghAFIit1QqeSSKJoTsfeZhYUYPMRJIp6v9VXSBTYmW3WvxvkakAyC/5mXCAmG1GRr9Wsf71DP82Loo+mTJriUg0KrH0mwKqe7wpH7Jmi1PesW7j0lj/e9kICUFA87VZKOgdXBjujkAC2Vxu7YvO4Lzr9v7wqo6vxanP3pB1zeYs9CIUKALhrh4RBCJiVokoyK2PDFAnCUn9/4pM87JWFMQpz9qQzYAi0O6bwTHzWshGk8hMzeB2nwkUzR+LAEK7D6EpNnOFtnBzeu2MhgBEqwkI2uHRCGpWIGaQELP8NqBqvtK2zGRzDYwVdMqZ/02/ZliTyGwsGyMvUAaBxNamMsNo6uTvW9Kybrho98J4l1/enD5/U22PeWGyIgCDZO9lYcFYqBOtdZyZIlizKf3q9tQJIsgEqtCEXk0v+cD14/bbpdJkakN63Wenfe1vtfGKwG1bePmZXTuuLo1iMGTRUzY4bn4ACBQaDJMy+NKjJtvhYNH8cN0JYU2fQKAMMs2dGHEy+vqG9McHTxjrBPjMt9d70uf7frSJ5x1SOOewjkvfXdt3YQlgcYfP/XCzVYtSXUOSZCvzzg0cNFFiFoHpIfffqbDDqhJ8+KvrPeirpYPml44d421/4Cm/SYdMlG6fZqJiQcVYyWt+UfjZdJLIIDUqySQYL9OenbByrCGQCKwbcNq+FZDp0s9xzlLW9njamR2L5oVMoCz40821N/1gYNOQd17dtcd2pWFtJGUZvvPLvgd9tPdfiWxOoJ8smADWbkwLq0C6uc9R+1TmT4QmSxYMvejbAzA5FrqdMBeWLQyb6vYqSLrBbVM1WDy/sLJkmKyowg9/vcmiefT6af/dJk1OFDZsrgW6BTfd1jNRGTGBxuRuqC0skU0BLOzwnh/2XXbSOHjPVWMOf+u0Exfx4E+HX0xz9uLw6f0L8Ou/DUwWLOxwj4/VfjeNBCQkmWSQCLbpsroTlnZbAokq+P5U4Ue/3uzQfSYctlfHHx5Y+OC3e+7YmJ60S+WS47ugrmvP+ebQDvMKUz2eeVLHdssLdZ1aNPaC/O8etbRDIrUmINljksPe0fePhxS2Wz1mt+1Kj71iQpunvXOD5WMVuKPPIbuVdtmmNIr+IJ378Z5TO0HDs2jki+SUhaXtXzLtw1+esmFjX5M//G2Te7z8Tl+6oTJRkkmdqSxgNJmAbOY3rgegeSZbM+DHGwcO6w5sOxk+toY9J7u2nwidRmDCoC/rWjZ+fGsvgalBWDjeFUYItCUiSCTKxmsQ7qJGO5zGRQgCkSSMEtCWGHE+b5OtJluTyLnemGTDNt0lImmOULSTZ18FqU1zAiOIERcsbbIdlo1+doGNSZvRIiMG0AyeE1UUk18bbL7jRHMkjCbNnWpi2df+BQhoYvVWaPXIAAAAAElFTkSuQmCC",
      link: "https://news.google.com/",
    },
    {
      name: "Gmail",
      imgLink:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAV1BMVEVHcEzZUUXXd2/z9PTeU0fZbmbo5+f0+vrx8vLbQjPaSz7WTkHotLHBOyzDTkPAOCjhhX7ZeHHEo6DqzMrFxcS8cGrae3Ti4uLMdm/p6urQ1NS8OSrl5eWBeqqfAAAAHXRSTlMAc5qd//z//////6Pxof3//+n////y6P/z//9ysazRhhoAAADtSURBVHgB1ZJXgoMwDERTXEUH7wo5uf85Y4mOyQEyCXXevC9uP5L74/klj7v0SmljXRZrtAcmCqWULzPClt4DFDOgIEmyeUrFQM0ES85zgEYAqGtgonUzYp3Mfd3MAHQ9OwAGIewgNYS/FfjHMC4S61rpx4A7gDD0MEkG4B76iDRugEEMQXuWeFDgdYhoTgCG2INYeJ76DEhEksA0R5MbmIi99zxHk+I2oJsAjDEGnvPekMsMTMiF97Qz+MWAfJ33RDlgnKNZQFcAOWJC/FdAaoWQPgcM1zNBR+DFgHTLfwe85KMsHu/LPCrufyEfyewjNsxN1fgAAAAASUVORK5CYII=",
      link: "https://mail.google.com/mail/",
    },
    {
      name: "Meet",
      imgLink:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAuCAMAAABK1yqqAAAAvVBMVEUArEf/////ugAmhPwAZtoAgy3pQjUAq0RQu2//tgAAnj4hgvwAevxcnPzj7f8Apzb/+/X1+/cAYeIAomQ4gfP8qxDoNjfwPh7/6sPD5c3/5rtShuG74cQAfy8ApS/oKxb62NbDqRb40tf/wj/nGhn/14/V7Ns3tF7r9u6t3LllwX6By5Qbr0+f2LPvJwDuMSFwsFFllPFEiSfksw2cnx1tlCVqjQAAhyAAjjQAnlmTsOsAXtiNz5/19/16n+aIInhqAAABQElEQVRIiZ3Va1eCQBCA4VlzWyBzpbKEdMUuit3TLpba//9ZwhowEZdl3k984DmHM+zZAYa66rfKu/bxqwzQc3BTBVv2bQkMxueVsGX3CmEwPqyDgyIYuVroF8DYGcPpzAoBOVM4V0LeAXKG8F4BCAuQM4OWhAQmzgSGDwISmDoD6EntNMxc/X98VAAJDJ4u0p779r+wfJGQwdezrE63l89HcuEAgsdHB2mdLss3SOGScxKcjGjwLXIU+B47AlxwToFLzklwMiLB/VgI8CNzjaD3yYlQrqgQHCrMZFMIQIZAhrCiQi1JMB5RBXTzDVMYyT/wsp118qVkPkA5ogyeCqhIzi1Jg0O9N0iQ/V7JzSGb6iVAgPu1Q4F60dEg2yjlkSALXUaDUfC9NobKxXDbXptBoTb49APb/hhBMcMfytgOu6QykzFbyvgAAAAASUVORK5CYII=",
      link: "https://meet.google.com/",
    },
    {
      name: "Chat",
      imgLink:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA4CAMAAACBkfufAAAAclBMVEX///8ArEdbuXQAgy0AgCkAqT5fvXhhu3gQnkKIzJkpkkUIjTYAqkHD48tWt3BRtmyKypoApzYApS18xY5wwYWr2LbT6thIs2aVzqNqvoAZrUsAii0WiTZAo1qSz6BLq2QvsVjf8OPs9e6g1q1Et2a33r/FVDMqAAAA0ElEQVRIie3Uyw6CQAyF4Q7DRRBEEAFRuQi+/ysqCahFK2USFybz77+crgqACnbObMkeJpXZxpgvdLBKMwbqHd7LOVt9B8S2XGZo9hNWGjbZG3OLaOhoUp3O9oQVlhhbSzLTQw7Kp/rGpFkhVgsmQ3MgmExqpplmn9mKyTYuYoLJugazQpJPyPTCsSwFzO53klXBUNr/RsHMt9FL1exPmOUqsfhCMt+iiuIAKBYlLlWLt15ZnAM/NfVgcbtEgZoCNQVqCnwlBbWvoqDp6utydQP9xx42YUUCYwAAAABJRU5ErkJggg==",
      link: "https://chat.google.com/",
    },
  ];
  return (
    <div className="Mfg in" style={{ top: `${top}` }}>
      <div className="mgDiv in">
        {alloptions &&
          alloptions.map((it, index) => {
            return (
              <a
                href={it.link}
                className="opt  in"
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <img
                  width={"40px"}
                  className="in"
                  src={it.imgLink}
                  alt={it.name}
                ></img>
                <span className="in">{it.name}</span>
              </a>
            );
          })}
      </div>
    </div>
  );
}
