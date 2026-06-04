---
permalink: /
title: "Homepage of Yumeng Liao"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
Welcome to my personal website!
-----

My name is Yumeng Liao and I'm currently a Postdoc Researcher of <a href="https://roque.princeton.edu" target="_blank">Prof. Jose Roque</a>'s group at Princeton University since May 2025. I'm interested in organic synthesis, homogeneous catalysis, organometallic chemistry, and main-group chemistry. <br><br>

I obtained my Ph.D. from the University of Tokyo under the supervision of <a href="http://park.itc.u-tokyo.ac.jp/nozakilab/indexE.html" target="_blank">Prof. Kyoko Nozaki</a> in 2025. My research focused on the development of homegeneous nickel catalyst for the selective degradation of thermosetting resins. <br><br>

Before joining the Nozaki group, I conducted my undergraduate research with <a href="https://www.rs.tus.ac.jp/mtd/" target="_blank">Prof. Takanori Matsuda</a> at Toyko University of Science, and my master research with <a href="https://onlinelibrary.wiley.com/doi/pdf/10.1002/anie.201006869" target="_blank">Prof. Nobuharu Iwasawa</a> at Tokyo Institute of Technology, where I was working on rhodium and ruthenium catalysis for C–H activation.<br><br>

<h2>News</h2>

<div style="border-left: 4px solid #2f4f6f; background: #f8f9fa; padding: 16px 20px; margin: 18px 0 30px 0;">

  {% for item in site.data.news %}
    <div style="{% unless forloop.last %}margin-bottom: 18px; {% endunless %}line-height: 1.6;">
      <div style="font-weight: 700; color: #2f4f6f; margin-bottom: 2px;">{{ item.date }}</div>
      <div style="margin-left: 20px;">
        {{ item.text }}
      </div>
    </div>
  {% endfor %}

</div>

<br><br>
**雜談日記<a href="https://hatechem-lym.hatenablog.com" target="_blank">中文博客</a>**

