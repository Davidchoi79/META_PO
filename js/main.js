// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card, .about-content');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add loading animation for project images
document.querySelectorAll('.project-image img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
});

// Simple typing effect for hero title (optional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Project Detail Modal
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const closeBtn = document.querySelector('.close');

// Project detail data
const projectDetails = {
    'meta-platform': {
        title: '외식메타 피처 플랫폼 구축 (2023-현재)',
        content: `
            <div class="modal-section">
                <h3>프로젝트 개요</h3>
                <p>외식 산업의 분산된 이기종 데이터 소스를 통합하여 도메인 인사이트를 도출하는 스노우플레이크 기반 데이터 플랫폼 구축 프로젝트입니다.</p>
                
                <div class="achievement-highlight">
                    <strong>핵심 성과:</strong><br>
                    • 스노우플레이크 글로벌 공식 사례 선정<br>
                    • AWS AI 펀딩사업 프로젝트 채택<br>
                    • 출시 전 첫 계약 1억원 달성 (당근마켓)<br>
                    • 데이터 처리 리드타임 75% 단축 (2주→3일)<br>
                    • 메타데이터 추출 확장 94% 달성
                </div>
            </div>

            <div class="modal-section">
                <h3>도전 과제</h3>
                <ul>
                    <li>외식 산업의 분산된 이기종 데이터 소스를 통합하여 도메인 인사이트 도출</li>
                    <li>리소스 제약 환경에서 확장 가능한 데이터 플랫폼 구축 필요</li>
                    <li>도메인 특화 메타데이터를 추출하여 고객사별 맞춤형 인사이트 제공</li>
                </ul>
            </div>

            <div class="modal-section">
                <h3>주도적 역할</h3>
                <ul>
                    <li><strong>프로젝트 리더십:</strong> PO+PM으로서 아키텍처 설계부터 상용화까지 전체 프로젝트 주도</li>
                    <li><strong>전략 수립:</strong> Snowflake 도입 및 4단계 모델링 전략 설계로 개발 효율성 60% 향상</li>
                    <li><strong>팀 리드:</strong> 7명 규모의 크로스펑셔널 팀 구성 및 애자일 개발 프로세스 설계</li>
                </ul>
            </div>

            <div class="modal-section">
                <h3>핵심 솔루션</h3>
                <h4>META-Pipeline Solution 아키텍처</h4>
                <ul>
                    <li><strong>수집통합:</strong> POI 150만건, IMG 500만건, 리뷰데이터, 서비스데이터, 외부제휴데이터</li>
                    <li><strong>처리:</strong> ETL/ELT 파이프라인 최적화 - dbt 모델링, Airflow 워크플로우</li>
                    <li><strong>맥락적 분류/추출 엔진:</strong> LLM 기반 도메인 특화 키워드 자동 식별</li>
                    <li><strong>이기종 블렌딩:</strong> 이질적 데이터 소스의 통합으로 외식 인사이트 구현</li>
                </ul>

                <h4>기술적 도전과 혁신적 접근</h4>
                <ul>
                    <li><strong>이기종 데이터 통합:</strong> 4단계 모델링 전략으로 데이터 처리 리드타임 75% 단축</li>
                    <li><strong>리소스 제약 환경:</strong> 린 방법론과 MVP 접근법으로 40% 적은 리소스로 목표 구현</li>
                    <li><strong>AI 모델 적용:</strong> LLM 기반 프롬프트 엔지니어링으로 메타데이터 추출 정확도 94% 달성</li>
                </ul>
            </div>

            <div class="modal-section">
                <h3>기술 스택</h3>
                <div class="tech-stack">
                    <span class="tech-tag">Snowflake</span>
                    <span class="tech-tag">dbt</span>
                    <span class="tech-tag">Airflow</span>
                    <span class="tech-tag">OpenAI API</span>
                    <span class="tech-tag">BigQuery</span>
                    <span class="tech-tag">AWS</span>
                    <span class="tech-tag">DataHub</span>
                    <span class="tech-tag">Python</span>
                </div>
            </div>

            <div class="modal-section">
                <h3>비즈니스 성과</h3>
                <ul>
                    <li><strong>산업 인정:</strong> AWS AI 펀딩사업 프로젝트 선정 및 스노우플레이크 글로벌 공식 사례 선정</li>
                    <li><strong>수익 창출:</strong> 출시 전 첫 계약 1억원 달성(당근마켓) 및 추가 제휴 확보</li>
                    <li><strong>조직 혁신:</strong> 서비스사업부를 데이터 비즈니스 중심 조직으로 성공적 전환</li>
                </ul>
            </div>
        `
    },
    'widget-solution': {
        title: '외식메타 콘텐츠 위젯 솔루션 (2024-현재)',
        content: `
            <div class="modal-section">
                <h3>프로젝트 개요</h3>
                <p>외식메타 플랫폼의 피처기반 메타데이터를 수익모델로 전환하는 B2B 구독형 위젯 솔루션 개발 프로젝트입니다.</p>
                
                <div class="achievement-highlight">
                    <strong>핵심 성과:</strong><br>
                    • 위젯 도입 채널의 유저 체류시간 25% 증가<br>
                    • 이탈률 20% 감소<br>
                    • 광고 RPM 67% 향상<br>
                    • 세션당 클릭수 35% 개선<br>
                    • MAU 300만 규모 플랫폼에서 프로토타입 테스트 성공
                </div>
            </div>

            <div class="modal-section">
                <h3>도전 과제</h3>
                <ul>
                    <li>외식메타 플랫폼의 피처기반 메타데이터를 수익모델로 전환 필요</li>
                    <li>고객사의 사용자 인게이지먼트와 체류시간 개선을 위한 솔루션 요구</li>
                    <li>구독 모델 기반의 안정적 수익원 구축 필요</li>
                </ul>
            </div>

            <div class="modal-section">
                <h3>주도적 역할</h3>
                <ul>
                    <li><strong>제품 기획 리더십:</strong> PO로서 B2B 콘텐츠 위젯 솔루션 모델링 및 클라우드 기반 SaaS 제품 기획 주도</li>
                    <li><strong>비즈니스 모델링:</strong> 구독형 서비스(2/9/30만원) 및 Add-on API 구독 모델 설계</li>
                </ul>
            </div>

            <div class="modal-section">
                <h3>핵심 솔루션</h3>
                <h4>맞춤형 위젯 솔루션 설계</h4>
                <ul>
                    <li><strong>위젯 템플릿 유형:</strong> 랭킹형, 트렌드형, 지도형 등 다양한 템플릿 제공</li>
                    <li><strong>설치 프로세스 최적화:</strong> 원클릭 스크립트 삽입으로 기술장벽 최소화</li>
                    <li><strong>관리자 인터페이스:</strong> 디자인/컬러/콘텐츠 커스터마이징 기능</li>
                </ul>

                <h4>성과 측정 체계</h4>
                <ul>
                    <li><strong>실시간 성과 대시보드:</strong> 전환율, 체류시간, 클릭률 분석</li>
                    <li><strong>A/B 테스트 프레임워크:</strong> 콘텐츠 최적화를 위한 실험 환경</li>
                    <li><strong>ROI 자동 계산 모델:</strong> 위젯 적용 매출 기여도 측정</li>
                </ul>
            </div>

            <div class="modal-section">
                <h3>기술 스택</h3>
                <div class="tech-stack">
                    <span class="tech-tag">React</span>
                    <span class="tech-tag">Node.js</span>
                    <span class="tech-tag">AWS</span>
                    <span class="tech-tag">JavaScript</span>
                    <span class="tech-tag">CSS3</span>
                    <span class="tech-tag">Analytics</span>
                    <span class="tech-tag">A/B Testing</span>
                    <span class="tech-tag">SaaS</span>
                </div>
            </div>

            <div class="modal-section">
                <h3>비즈니스 모델</h3>
                <ul>
                    <li><strong>Basic (2만원):</strong> 기본 위젯 템플릿 및 기본 분석</li>
                    <li><strong>Pro (9만원):</strong> 고급 템플릿, 커스터마이징, 상세 분석</li>
                    <li><strong>Enterprise (30만원):</strong> 전체 기능, 전용 지원, API 접근</li>
                </ul>
            </div>
        `
    },
    'sikshin-service': {
        title: '식신 맛집추천 서비스 운영 (2020-현재)',
        content: `
            <div class="modal-section">
                <h3>프로젝트 개요</h3>
                <p>경쟁 심화된 맛집 서비스 시장에서 유기적 트래픽 확보 및 사용자 유지를 위한 종합적인 서비스 성장 전략 실행 프로젝트입니다.</p>
                
                <div class="achievement-highlight">
                    <strong>핵심 성과:</strong><br>
                    • MAU 350만 달성 (2020년 대비 250% 증가)<br>
                    • 광고 네트워크 최적화로 매출 500% 증가<br>
                    • 오가닉 검색 유입 250% 증가<br>
                    • Page Speed 85점 이상 달성<br>
                    • POI 메타데이터 개발최신화 개선 70% 기여
                </div>
            </div>

            <div class="modal-section">
                <h3>도전 과제</h3>
                <ul>
                    <li>경쟁 심화된 맛집 서비스 시장에서 유기적 트래픽 확보 및 사용자 유지</li>
                    <li>수익 모델 다변화를 통한 비즈니스 지속가능성 확보</li>
                    <li>서비스 데이터의 현행화 및 정확도 향상 필요</li>
                </ul>
            </div>

            <div class="modal-section">
                <h3>주도적 역할</h3>
                <ul>
                    <li><strong>서비스 성장 전략:</strong> SEO 중심의 트래픽 확장 전략 수립 및 실행</li>
                    <li><strong>컨텐츠 품질 관리:</strong> POI 데이터 현행화 및 메타데이터 강화 프로세스 구축</li>
                    <li><strong>수익 모델 개발:</strong> 광고 네트워크 최적화 및 B2B 제휴 모델 개발</li>
                </ul>
            </div>

            <div class="modal-section">
                <h3>핵심 전략 및 실행</h3>
                <h4>SEO 고도화</h4>
                <ul>
                    <li>기술적 SEO, 콘텐츠 SEO, 인덱싱 전략 최적화</li>
                    <li>리치 스니펫 획득률 30% 달성</li>
                    <li>구조화된 데이터 마크업 적용</li>
                </ul>

                <h4>콘텐츠 품질 개선</h4>
                <ul>
                    <li>데이터 정확도 향상 및 테마 콘텐츠 생산 체계</li>
                    <li>POI 데이터 현행화 프로세스 구축 (정확도 98%)</li>
                    <li>데이터개발의 피처키워드로 방대한 추천 테마컨텐츠 공급</li>
                </ul>

                <h4>사용자 경험 최적화</h4>
                <ul>
                    <li>여정 매핑 및 A/B 테스트 시스템 구축</li>
                    <li>Page Speed 최적화로 85점 이상 달성</li>
                    <li>모바일 우선 반응형 디자인 적용</li>
                </ul>

                <h4>데이터 현행화</h4>
                <ul>
                    <li>자동 업데이트 파이프라인 및 검증 체계 구축</li>
                    <li>Looker 기반 실시간 SEO 대시보드 구축</li>
                    <li>주간 리포트 자동화 시스템 구축</li>
                </ul>
            </div>

            <div class="modal-section">
                <h3>기술 스택</h3>
                <div class="tech-stack">
                    <span class="tech-tag">SEO</span>
                    <span class="tech-tag">Google Analytics</span>
                    <span class="tech-tag">Looker</span>
                    <span class="tech-tag">A/B Testing</span>
                    <span class="tech-tag">Data Pipeline</span>
                    <span class="tech-tag">Content Management</span>
                    <span class="tech-tag">Performance Optimization</span>
                    <span class="tech-tag">Mobile Optimization</span>
                </div>
            </div>

            <div class="modal-section">
                <h3>데이터 자산화</h3>
                <ul>
                    <li><strong>POI 데이터베이스:</strong> 150만개 POI 데이터를 외식메타 플랫폼의 핵심 자산으로 전환</li>
                    <li><strong>메타데이터 강화:</strong> 위치, 카테고리, 특징, 리뷰 데이터 통합 관리</li>
                    <li><strong>품질 관리:</strong> 지속적인 데이터 검증 및 업데이트 프로세스 운영</li>
                </ul>
            </div>
        `
    }
};

// Modal event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Detail button click handlers
    document.querySelectorAll('.detail-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectCard = e.target.closest('.project-card');
            const projectId = projectCard.getAttribute('data-project');
            
            if (projectDetails[projectId]) {
                modalTitle.textContent = projectDetails[projectId].title;
                modalContent.innerHTML = projectDetails[projectId].content;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });
    });

    // Close modal handlers
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // ESC key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

// Uncomment to enable typing effect
// document.addEventListener('DOMContentLoaded', () => {
//     const heroTitle = document.querySelector('.hero-title');
//     const originalText = heroTitle.textContent;
//     typeWriter(heroTitle, originalText, 80);
// });